import React, { FC, useState } from 'react'
import { Box, Button, CircularProgress, DialogContent, DialogContentText, DialogTitle, Pagination } from '@mui/material'
import { Form, FormikProps } from 'formik'
import { useQuery } from '@apollo/client'
import { GET_Locations } from '../../graphql'
import { EnumDialogStatus } from './Form'
import { SceneType } from '../../types'

type Props = {
  setDialogStatus: React.Dispatch<React.SetStateAction<EnumDialogStatus>>
  formik: FormikProps<SceneType>
}

export const AddSceneLocation: FC<Props> = ({ setDialogStatus, formik }) => {
  const [page, setPage] = useState(1)

  const { loading, error, data } = useQuery(GET_Locations, { variables: { page } })

  const dataFormik = formik.values.location

  const handleBackClick = () => setDialogStatus(EnumDialogStatus.main)

  if (error) {
    return <DialogTitle>Error</DialogTitle>
  }

  return (
    <Form>
      <Box display="flex" justifyContent="space-between" width="100%">
        <DialogTitle>Pick Scene Location</DialogTitle>
        <Button onClick={handleBackClick} type="button" variant="text">
          Back
        </Button>
      </Box>
      <DialogContent style={{ paddingTop: 0 }}>
        <DialogContentText>Сhoose a location and you will be returned back to New Scene Settings</DialogContentText>
        {loading ? (
          <Box margin="30px 0" display="flex" justifyContent="center" alignItems="center" height="545px" width="560px">
            <CircularProgress size={50} color="secondary" />
          </Box>
        ) : (
          <Box
            margin="30px 0 0 0"
            display="grid"
            gridTemplateColumns={'1fr 1fr'}
            gap="20px"
            height="545px"
            width="560px"
            overflow="auto"
          >
            {data.locations.results.map(el => (
              <Button
                onClick={() => formik.setFieldValue('location', el.name)}
                key={el.id}
                variant={dataFormik === el.name ? 'contained' : 'text'}
              >
                {el.name}
              </Button>
            ))}
          </Box>
        )}

        <Pagination
          disabled={loading}
          style={{
            margin: '40px auto 20px auto',
            width: 'fit-content',
          }}
          onChange={(e, page) => setPage(page)}
          color="primary"
          count={data?.locations?.info?.pages}
          variant="outlined"
          shape="rounded"
        />
      </DialogContent>
    </Form>
  )
}

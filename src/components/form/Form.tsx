import React, { FC, useState } from 'react'
import { Dialog } from '@mui/material'
import { Formik, FormikProps } from 'formik'
import { AddSceneMain } from './AddSceneMain'
import { AddSceneLocation } from './AddSceneLocation'
import { AddSceneCharacters } from './AddSceneCharacters'
import { validationSchema } from './validationSchema'
import { SceneType } from '../../types'

export enum EnumDialogStatus {
  main,
  characters,
  location,
}

type Props = {
  state: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  initialValues: SceneType
  onSubmit: (values: SceneType) => void
}

export const Form: FC<Props> = ({ state, initialValues, onSubmit }) => {
  const [isOpen, setIsOpen] = state
  const [dialogStatus, setDialogStatus] = useState<EnumDialogStatus>(EnumDialogStatus.main)

  const handleClose = () => setIsOpen(false)
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {(formik: FormikProps<SceneType>) => {
          if (dialogStatus === EnumDialogStatus.main) {
            return <AddSceneMain formik={formik} setIsOpen={setIsOpen} setDialogStatus={setDialogStatus} />
          }
          if (dialogStatus === EnumDialogStatus.location) {
            return <AddSceneLocation formik={formik} setDialogStatus={setDialogStatus} />
          }
          if (dialogStatus === EnumDialogStatus.characters) {
            return <AddSceneCharacters formik={formik} setDialogStatus={setDialogStatus} />
          }
        }}
      </Formik>
    </Dialog>
  )
}

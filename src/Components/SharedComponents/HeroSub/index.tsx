import Breadcrumbs from '@/Components/Breadcrumb'
import React, { FC } from 'react'
import { BreadcrumbLink } from '@/types/breadcrumb'

interface HeroSubProps {
  title: string;
  description: string;
  breadcrumbs: BreadcrumbLink[];
}

const HeroSub:FC<HeroSubProps> = ({ title, description, breadcrumbs }) => {
  return (
    <div>index</div>
  )
}

export default HeroSub
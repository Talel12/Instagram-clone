import type { Schema, Attribute } from '@strapi/strapi';

export interface OverviewAdmin extends Schema.Component {
  collectionName: 'components_overview_admins';
  info: {
    displayName: 'Admin';
  };
  attributes: {
    logo: Attribute.Media;
    CompanyName: Attribute.String;
    admin_users: Attribute.Relation<
      'overview.admin',
      'oneToMany',
      'admin::user'
    >;
  };
}

export interface OverviewCompany extends Schema.Component {
  collectionName: 'components_overview_companies';
  info: {
    displayName: 'Company';
    icon: 'attachment';
  };
  attributes: {
    CompanyName: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'overview.admin': OverviewAdmin;
      'overview.company': OverviewCompany;
    }
  }
}

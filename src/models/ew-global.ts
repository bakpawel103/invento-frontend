export interface EWGlobal {
  IsDev: boolean;
  User: {
    Account: string;
    FirstName: string;
    LastName: string;
    DisplayName: string;
    NamePrefix: string;
    UserId: string;
    UserTlc: string;
    Email: string;
    Roles: string[];
    showAdditionalOutput: boolean;
  };
}

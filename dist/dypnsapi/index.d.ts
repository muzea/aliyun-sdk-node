interface DYPNSAPI {
    CreateVerifyScheme(query: {
        "RegionId"?: string;
        "SchemeName": string;
        "AppName": string;
        "OsType": string;
        "OwnerId"?: number;
        "PackName"?: string;
        "PackSign"?: string;
        "BundleId"?: string;
    }): Promise<{}>;
    GetMobile(query: {
        "RegionId"?: string;
        "AccessToken": string;
        "OwnerId"?: number;
        "OutId"?: string;
    }): Promise<{}>;
    TwiceTelVerify(query: {
        "RegionId"?: string;
        "Since": string;
        "PhoneNumber": string;
        "OwnerId"?: number;
    }): Promise<{}>;
    VerifyMobile(query: {
        "RegionId"?: string;
        "AccessCode": string;
        "PhoneNumber": string;
        "OwnerId"?: number;
        "OutId"?: string;
    }): Promise<{}>;
}
export default DYPNSAPI;

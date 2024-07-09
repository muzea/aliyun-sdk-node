export interface ListRolesResponse {
    /**
     * requestId
     * @example `B7F4B621-E41E-4C84-B97F-42B5380A32BB`
     */
    RequestId: string;
    /**
     * code
     * @example `OK`
     */
    Code: string;
    /**
     * message
     * @example `.`
     */
    Message: string;
    /**
     * success
     * @example `True`
     */
    Success: boolean;
    /**
     * data
     * @example `2cb472ec1bf84f8d92f9c4baa0d21c19aa`
     */
    NextPageToken: string;
    /**
     * role list data
     * @example `[
        {
            "Description":"reserved by the system",
            "DisplayName":"admin",
            "UpdateTime":0,
            "IsPredefined":1,
            "Name":"admin"
        }
    ]`
     */
    Roles: any;
}

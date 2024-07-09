export interface ListUserRolesResponse {
    /**
     * RequestId
     * @example `B7F4B621-E41E-4C84-B97F-42B5380A32BB`
     */
    RequestId: string;
    /**
     * Code
     * @example `OK`
     */
    Code: string;
    /**
     * Message
     * @example `.`
     */
    Message: string;
    /**
     * success
     * @example `true`
     */
    Success: boolean;
    /**
     * UserRoles
     * @example `参考UserRoles结构`
     */
    UserRoles: any;
    /**
     * NextPageToken
     * @example `2cb472ec1bf84f8d92f9c4baa0d21c19aa`
     */
    NextPageToken: string;
}

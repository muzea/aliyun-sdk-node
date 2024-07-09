export interface GetCatalogSettingsResponse {
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
     * Success
     * @example `true`
     */
    Success: boolean;
    CatalogSettings: any;
}

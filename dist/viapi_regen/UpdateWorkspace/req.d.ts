export interface UpdateWorkspaceRequest {
    /**
     * 生产空间ID。
     * @example `78`
     */
    "Id": number;
    /**
     * 生产空间名称。
     * @example `WYQTEST`
     */
    "Name": string;
    /**
     * 生产空间描述。
     * @example `WYQTEST描述`
     */
    "Description"?: string;
}

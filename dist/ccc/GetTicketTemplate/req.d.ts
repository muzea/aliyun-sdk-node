export interface GetTicketTemplateRequest {
    /**
     * 模板ID。
     * @example `4ca2e2-c8d19b82c-d7ce393ac8197d3ab`
     */
    "TemplateId"?: string;
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 模板版本。
     * @example `1703517780627`
     */
    "TemplateVersion"?: string;
}

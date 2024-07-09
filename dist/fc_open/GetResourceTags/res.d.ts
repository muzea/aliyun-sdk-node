export interface GetResourceTagsResponse {
    /**
     * 阿里云资源的标识。
     * > 您可以通过此参数确认该资源所属的账号、服务、地域等。
     * @example `acs:fc:cn-shanghai:188077086902****:services/demo`
     */
    resourceArn: string;
    /**
     * 标签字典。
     * @example `{"k1":"v1"}`
     */
    tags: any;
}

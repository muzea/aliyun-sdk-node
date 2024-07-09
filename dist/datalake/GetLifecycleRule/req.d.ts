export interface GetLifecycleRuleRequest {
    /**
     * 资源名称，目录库表拼接而成的字符串
     * @example `demo_catalog_id.demo_db_name.demo_table_name`
     */
    "ResourceName"?: string;
    /**
     * 业务ID
     * @example `LCRU-17E7192705C365C0`
     */
    "BizId"?: string;
}

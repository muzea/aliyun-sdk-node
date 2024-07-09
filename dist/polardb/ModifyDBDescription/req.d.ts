export interface ModifyDBDescriptionRequest {
    /**
     * 集群ID。
     * @example `pc-***************`
     */
    "DBClusterId": string;
    /**
     * 数据库名称。
     * @example `testDB`
     */
    "DBName": string;
    /**
     * 数据库备注说明，备注说明需满足如下要求：
     * * 不能以`http://`或`https://`开头。
     * * 长度为2~256个字符。
     * @example `DBDesc`
     */
    "DBDescription": string;
}

export interface CreateExtensionsResponse {
    /**
     * 请求ID。
     * @example `ABB39CC3-4488-4857-905D-2E4A051D0521`
     */
    RequestId: string;
    /**
     * 需要安装的插件，多个插件间使用英文逗号（,）分隔。
     * @example `citext, dblink`
     */
    Extensions: string;
}

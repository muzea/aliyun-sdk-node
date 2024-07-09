export interface QueryFaceUserByNameRequest {
    /**
     * 业务隔离ID，用于隔离同一个阿里云账号下不同业务应用之间的数据。请与调用[AddFaceUser](~~288338~~)接口添加用户时设置的**IsolationId**保持一致。
     * @example `ZheJiangHZ`
     */
    "IsolationId": string;
    /**
     * 用户名。支持中文、英文字母大小写、数字、下划线（_）和短划线（-），长度不超过64个字符。
     * 支持模糊匹配，若不填，则为全量匹配。
     * @example `Tony`
     */
    "Name"?: string;
    /**
     * 用户参数，请自定义。
     * 支持匹配搜索，但不支持模糊匹配。
     * @example `{"key1":"value1", "key2":"value2"}`
     */
    "Params"?: string;
    /**
     * 返回结果中，每页显示的记录数量。最大取值50，最小取值1。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 指定从返回结果中的第几页开始显示。最小取值为1。
     * @example `1`
     */
    "PageNo": number;
}

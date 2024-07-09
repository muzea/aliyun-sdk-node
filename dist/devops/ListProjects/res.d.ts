export interface ListProjectsResponse {
    /**
     * 总数
     * @example `10`
     */
    totalCount: number;
    /**
     * 分页Token，没有下一页则为空
     * @example `""`
     */
    nextToken: string;
    /**
     * 每页数量
     * @example `20`
     */
    maxResults: number;
    /**
     * 请求id，每次请求都是唯一值，便于后续排查问题
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `error`
     */
    errorMsg: string;
    /**
     * 错误码
     * @example `Openapi.RequestError`
     */
    errorCode: string;
    /**
     * true或者false
     * @example `true`
     */
    success: boolean;
    /**
     * 项目信息
     */
    projects: {
        /**
         * 创建人aliyunPK
         * @example `19xx7043xxxxxxx914`
         */
        creator: string;
        /**
         * 自定义编号，企业下唯一
         * @example `OJAY`
         */
        customCode: string;
        /**
         * 删除时间
         * @example `null`
         */
        deleteTime: number;
        /**
         * 描述信息
         * @example `xxx`
         */
        description: string;
        /**
         * 创建时间
         * @example `1640778694000`
         */
        gmtCreate: number;
        /**
         * 项目封面
         * @example `https://xxxxxx.png`
         */
        icon: string;
        /**
         * 项目唯一标识符
         * @example `e8bxxxxxxxxxxxxxxxx23`
         */
        identifier: string;
        /**
         * 项目名称
         * @example `xxxx`
         */
        name: string;
        /**
         * 公开还是私有
         * @example `public`
         */
        scope: string;
        /**
         * 类型id
         * @example `null`
         */
        typeIdentifier: string;
        /**
         * 状态阶段
         * @example `null`
         */
        statusStageIdentifier: string;
        /**
         * 逻辑状态
         * @example `null`
         */
        logicalStatus: string;
        /**
         * 资源大类型
         * @example `Project`
         */
        categoryIdentifier: string;
    }[];
}

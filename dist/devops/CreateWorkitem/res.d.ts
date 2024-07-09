export interface CreateWorkitemResponse {
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
     * 工作项信息
     */
    workitem: {
        /**
         * 工作项唯一标识
         * @example `e8bxxxxxxxxxxxxxxxx23`
         */
        identifier: string;
        /**
         * 工作项标题
         * @example `测试工作项`
         */
        subject: string;
        /**
         * 工作项内容
         * @example `html格式`
         */
        document: string;
        /**
         * 负责人的阿里云accountId
         * @example `19xx7043xxxxxxx914`
         */
        assignedTo: string;
        /**
         * 状态名称
         * @example `待处理`
         */
        status: string;
        /**
         * 状态阶段id
         * @example `100005`
         */
        statusStageIdentifier: string;
        /**
         * 所属项目id
         * @example `e8b26xxxxx6e76aa20xxxxx23`
         */
        spaceIdentifier: string;
        /**
         * 所属项目名称
         * @example `需求项目`
         */
        spaceName: string;
        /**
         * 项目类型
         * @example `Project`
         */
        spaceType: string;
        /**
         * 逻辑状态
         * @example `NORMAL`
         */
        logicalStatus: string;
        /**
         * 工作项的类型id
         * @example `Req`
         */
        categoryIdentifier: string;
        /**
         * 父工作项id
         * @example `e8bxxxxxxxxxxxxxxxx24`
         */
        parentIdentifier: string;
        /**
         * 工作项类型id
         * @example `9uxxxxxxre573f5xxxxxx0`
         */
        workitemTypeIdentifier: string;
        /**
         * 状态更新时间
         * @example `1640850328000`
         */
        updateStatusAt: number;
        /**
         * 编号
         * @example `ABCD-1`
         */
        serialNumber: string;
        /**
         * 创建时间的时间戳，单位毫秒
         * @example `1640850318000`
         */
        gmtCreate: number;
        /**
         * 修改时间的时间戳，单位毫秒
         * @example `1640850318000`
         */
        gmtModified: number;
        /**
         * 创建人的阿里云accountId
         * @example `19xx7043xxxxxxx914`
         */
        creator: string;
        /**
         * 修改人的阿里云accountId
         * @example `19xx7043xxxxxxx914`
         */
        modifier: string;
        /**
         * 状态唯一标识id
         * @example `28`
         */
        statusIdentifier: string;
        /**
         * 迭代的唯一标识id
         * @example `75528f17703e92e5a568......`
         */
        sprintIdentifier: string;
        /**
         * 描述内容的格式，RICHTEXT 或者是 MARKDOWN
         * @example `RICHTEXT`
         */
        documentFormat: string;
    };
}

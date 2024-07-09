export interface GetWorkItemInfoResponse {
    /**
     * 请求id，每次请求都是唯一值，便于后续排查问题
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
     */
    requestId: string;
    /**
     * 错误码
     * @example `Openapi.RequestError`
     */
    errorCode: string;
    /**
     * 错误信息
     * @example `error`
     */
    errorMessage: string;
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
         * 工作项内容格式，支持RICHTEXT和MARKDOWN
         * @example `RICHTEXT`
         */
        documentFormat: string;
        /**
         * 负责人
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
         * @example `1`
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
         * 状态更新时间戳，单位毫秒
         * @example `1640850328000`
         */
        updateStatusAt: number;
        /**
         * 工作项在项目中的编号
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
         * 状态id
         * @example `例：100005`
         */
        statusIdentifier: string;
        /**
         * 关联的迭代id
         */
        sprint: string[];
        /**
         * 标签ID列表
         */
        tag: string[];
        /**
         * 参与人account id列表
         */
        participant: string[];
        /**
         * 抄送人的account id列表
         */
        tracker: string[];
        /**
         * 验证者的account id列表
         */
        verifier: string[];
        /**
         * 自定义字段列表
         */
        customFields: {
            /**
             * 字段的唯一标识
             * @example `例：80`
             */
            fieldIdentifier: string;
            /**
             * 字段格式，便于查询数据
             * @example `例：input`
             */
            fieldFormat: string;
            /**
             * 字段的className，便于数据查询
             * @example `例如：date`
             */
            fieldClassName: string;
            /**
             * 值对象列表
             * @example `null`
             */
            objectValue: string;
            /**
             * 字段值，写入时使用
             * @example `例：2022-01-06 00:00:00`
             */
            value: string;
            /**
             * 工作项的唯一标识
             * @example `5daa9a15c7fd55523996......`
             */
            workitemIdentifier: string;
            /**
             * 自定义字段值的position
             * @example `1`
             */
            position: number;
            /**
             * 展示级别，数字范围1~9，数字越大，颜色越浅。
             * @example `1`
             */
            level: number;
            /**
             * 值对象列表，查询时使用
             */
            valueList: {
                /**
                 * 字段值
                 * @example `2022-02-01 00:00:00`
                 */
                value: string;
                /**
                 * 字段英文值，目前只有列表类有英文值
                 * @example `null`
                 */
                valueEn: string;
                /**
                 * 根据语言环境获取当前展示的值
                 * @example `2022-02-01 00:00:00`
                 */
                displayValue: string;
                /**
                 * 字段值为对象类型时，值所对应的对象的唯一标识例如：option表中的id
                 * @example `2022-02-01 00:00:00`
                 */
                identifier: string;
                /**
                 * 展示级别，数字范围1~9，数字越大，颜色越浅。
                 * @example `1`
                 */
                level: number;
            }[];
        }[];
        /**
         * 完成时间
         * @example `1699366778000`
         */
        finishTime: number;
        /**
         * 标签详情
         */
        tagDetails: {
            /**
             * 标签唯一标识
             * @example `8d859b4fce9d86bc324a9cf00c`
             */
            identifier: string;
            /**
             * 标签名称
             * @example `paymentcenter`
             */
            name: string;
            /**
             * 标签颜色
             * @example `#1F9AEF`
             */
            color: string;
        }[];
    };
}

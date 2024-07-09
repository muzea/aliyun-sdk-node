export interface DescribeProjectInfoResponse {
    /**
     * 成功状态标识
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID
     * @example `ee3e1b3b-6c38-4bcf-be40-5a946cfda761`
     */
    RequestId: string;
    /**
     * 返回结果
     */
    Result: {
        /**
         * 云市场商品名称
         * @example `公司宝****记账`
         */
        ProductName: string;
        /**
         * 项目执行状态，取值：
         * - Starting：进行中
         * - Cancel：已取消
         * - Pause：已暂停
         * - Finish：已完成
         * @example `Starting`
         */
        ProjectStatus: string;
        /**
         * 用户阿里云UID
         * @example `27291111****`
         */
        CustomerAliUid: number;
        /**
         * 项目所属模板类型，取值：
         * - Public：公共模板
         * - Private：私有模板
         * @example `Public`
         */
        TemplateType: string;
        /**
         * 云市场业务实例ID
         * @example `4****89`
         */
        InstanceId: string;
        /**
         * 云市场商品规格名称
         * @example `小***纳税人`
         */
        ProductSkuName: string;
        /**
         * 最后节点的序号
         * @example `4`
         */
        FinalStepNo: number;
        /**
         * 当前流程节点
         * @example `3`
         */
        CurrentStepNo: number;
        /**
         * 项目超时时间（Unix时间戳）
         * @example `1620403200000`
         */
        GmtExpired: number;
        /**
         * 项目完成时间（Unix时间戳）
         * @example `1620403200000`
         */
        GmtFinished: number;
        /**
         * 云市场商品规格Code
         * @example `yuncode****500001`
         */
        ProductSkuCode: string;
        /**
         * 项目创建时间（Unix时间戳）
         * @example `1588834324000`
         */
        GmtCreate: number;
        /**
         * 项目所属厂商UID
         * @example `45121111****`
         */
        SupplierAliUid: number;
        /**
         * 项目完成方式，取值：
         * - null：未完成项目默认值
         * - CustomerConfirm：客户手动确认
         * - SystemAutoConfirm：因超时系统自动确认
         * @example `null`
         */
        FinishType: string;
        /**
         * 项目所属流程模板ID
         * @example `410`
         */
        TemplateId: number;
        /**
         * 订单ID
         * @example `2059111111111`
         */
        OrderId: number;
        /**
         * 商品Code
         * @example `cmgj***055`
         */
        ProductCode: string;
    };
}

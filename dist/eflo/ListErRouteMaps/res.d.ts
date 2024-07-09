export interface ListErRouteMapsResponse {
    /**
     * 响应状态码
     * @example `0`
     */
    Code: number;
    /**
     * 错误信息。（当实例状态为异常时，提示异常原因）
     * @example `成功`
     */
    Message: string;
    /**
     * 当次请求的Request ID。
     * @example `0901F411-28FA-5B9C-BAEE-7776463FF0DC`
     */
    RequestId: string;
    /**
     * 响应内容
     */
    Content: {
        /**
         * 总记录数
         * @example `0`
         */
        Total: number;
        /**
         * 路由策略信息列表
         */
        Data: {
            /**
             * 地域ID
             * @example `cn-wulanchabu`
             */
            RegionId: string;
            /**
             * 租户ID
             * @example `1655449505171`
             */
            TenantId: string;
            /**
             * 创建时间
             * @example `1601176751000`
             */
            CreateTime: string;
            /**
             * 修改时间
             * @example `1601176751000`
             */
            GmtModified: string;
            /**
             * 提示信息
             * @example `成功`
             */
            Message: string;
            /**
             * 状态实例状态。可能值：
             * - **Available**：可用
             * - **Not Available**：不可用
             * - **Executing**：执行中
             * - **Deleting**：删除中
             * @example `Available`
             */
            Status: string;
            /**
             * 路由策略ID
             * @example `er-rmap-uwglhzom`
             */
            ErRouteMapId: string;
            /**
             * 灵骏HUB ID
             * @example `er-kkopgtne`
             */
            ErId: string;
            /**
             * 策略编号。
             * 序号越小，优先级越低，当进行路由匹配时会优先匹配优先级高的策略。
             * **取值范围：1001~2000**
             * @example `1001`
             */
            RouteMapNum: number;
            /**
             * 策略描述
             * @example `描述`
             */
            Description: string;
            /**
             * 目的网段
             * @example `0.0.0.0/0`
             */
            DestinationCidrBlock: string;
            /**
             * 发布实例名称
             * @example `vpd-transmit`
             */
            TransmissionInstanceName: string;
            /**
             * 发布实例ID
             * @example `vpd-8rgvqazb`
             */
            TransmissionInstanceId: string;
            /**
             * 发布实例类型,可能值：
             * - **VPD**：灵骏网段。
             * - **VCC**：灵骏连接。
             * @example `VPD`
             */
            TransmissionInstanceType: string;
            /**
             * 接收实例名称
             * @example `vpd-reception`
             */
            ReceptionInstanceName: string;
            /**
             * 接收实例ID
             * @example `vpd-9rgxqazc`
             */
            ReceptionInstanceId: string;
            /**
             * 接收实例类型，可能值：
             * - **VPD**：灵骏网段。
             * - **VCC**：灵骏连接。
             * @example `VPD`
             */
            ReceptionInstanceType: string;
            /**
             * 策略行为；可选值：
             * - **permit**: 允许
             * - **deny**： 禁止
             * @example `permit`
             */
            Action: string;
            /**
             * 发布实例所属租户
             * @example `1620939556166277`
             */
            TransmissionInstanceOwner: string;
            /**
             * 接收实例所属租户
             * @example `1620939556166277`
             */
            ReceptionInstanceOwner: string;
            /**
             * 资源组实例ID
             */
            ResourceGroupId: string;
        }[];
    };
}

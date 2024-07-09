export interface ListOrderResponse {
    /**
     * 接口返回码。
     * - **200**：表示成功。
     * - 其它：表示错误码。错误码详情，请参见[错误码](~~375339~~)。
     * @example `200`
     */
    Code: string;
    /**
     * 调用失败时，返回的错误信息。
     * @example `InstanceId cannot be empty.`
     */
    ErrorMessage: string;
    /**
     * 请求ID，阿里云为该请求生成的标识符。
     * @example `E4F94B97-1D64-4080-BFD2-67461667AA43`
     */
    RequestId: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 根据当前所在地展示对应语言的错误提示。
     * @example `InstanceId cannot be empty.`
     */
    LocalizedMessage: string;
    /**
     * 返回信息。
     */
    Data: {
        /**
         * 查询页数。
         * @example `1`
         */
        PageNo: number;
        /**
         * 每页的数量。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总页数。
         * @example `5`
         */
        PageCount: number;
        /**
         * 符合条件的总订单数。
         * @example `48`
         */
        Total: number;
        /**
         * 订单列表。
         */
        List: {
            /**
             * 套餐结算周期。
             * - **1101**：月度。
             * - **1103**：季度。
             * - **1106**：半年度。
             * - **1112**：年度。
             * @example `1101`
             */
            BillingCycle: string;
            /**
             * 购买张数。
             * @example `100`
             */
            BuyNum: number;
            /**
             * 池容量单位。
             * @example `GB`
             */
            PoolCapacityUnit: string;
            /**
             * 支付时间。
             * @example `2022-04-11 16:43:00`
             */
            CardPayCount: number;
            /**
             * 套餐凭证。
             * @example `AL-UPG-******3_beika4`
             */
            CredentialPackage: string;
            /**
             * 运营商。
             * - **CMCC**：移动。
             * - **CUCC**：联通。
             * - **CTCC**：电信。
             * - **VNO**：虚拟运营商。
             * @example `CMCC`
             */
            Vendor: string;
            /**
             * 流量包档位。
             * @example `30MB`
             */
            DataLevel: string;
            /**
             * 购买时长。
             * @example `12月`
             */
            PayDuration: string;
            /**
             * 资费版本。
             * @example `ali_2`
             */
            AliFee: string;
            /**
             * 订单状态。
             * - **processing**：处理中。
             * - **failure**：失败。
             * - **completed**：处理完成。
             * - **unpaid**：待支付。
             * - **refunded**：已退款。
             * @example `processing`
             */
            OrderStatus: string;
            /**
             * 池编号。
             * @example `beika4`
             */
            PoolNo: string;
            /**
             * 月功能费份数（统付池专用）。
             * @example `90`
             */
            FunctionFee: number;
            /**
             * 购买时间。
             * @example `2022-04-11 16:43:00`
             */
            PayTime: string;
            /**
             * 流量类型。
             * - **singlecard**：单卡通用流量。
             * - **directionalcard**：单卡定向流量。
             * - **sameflowcard**：同档位池共享流量。
             * - **directional_sameflowcard**：同档位池共享定向流量。
             * - **unityPayPool**：统付池通用流量。
             * - **GREcard**：统付池定向流量。
             * @example `singlecard`
             */
            FlowType: string;
            /**
             * 池容量，单位参见**PoolCapacityUnit**字段。
             * @example `200`
             */
            PoolCapacity: string;
            /**
             * 订单信息。
             * @example `123123`
             */
            OrderInfo: string;
            /**
             * 订单类型。
             * - **NEW**：新购。
             * - **ADD_FLOW**：扩池。
             * - **ADD_CARD**：补卡。
             * - **FUNCTION**：购月功能费。
             * - **FLOW_PLUS**：购买叠加包。
             * - **RENEW**：续订套餐。
             * - **AUTO_RENEW**：自动续订套餐。
             * @example `NEW`
             */
            OrderType: string;
            /**
             * 订单编号。
             * @example `21450******0275`
             */
            OrderId: string;
            /**
             * 套餐凭证。
             * @example `CM-***-*-2-**M`
             */
            CredentialNo: string;
            /**
             * 物流信息。
             */
            ExpressNoList: string[];
            /**
             * 收货信息。
             */
            DeliveryInfo: {
                /**
                 * 收货信息：邮编。
                 * @example `100000`
                 */
                ZipCode: string;
                /**
                 * 收货信息：地址。
                 * @example `收货地址`
                 */
                Address: string;
                /**
                 * 收货信息：邮箱。
                 * @example `xxx@xxx.com`
                 */
                Mail: string;
                /**
                 * 收货信息：收件人。
                 * @example `收件人`
                 */
                Receiver: string;
                /**
                 * 收货信息：收件电话。
                 * @example `收件电话`
                 */
                BuyerMessage: string;
            };
            /**
             * 订单详情链接。
             * @example `https://us******60589`
             */
            OrderDetailUrl: string;
            /**
             * APN名称。
             * @example `CMIOTCZHZA.JS`
             */
            ApnName: string;
            /**
             * APN地域。
             * @example `cn-hangzhou`
             */
            ApnRegion: string;
            /**
             * IP购买数量。
             * @example `10000`
             */
            ResourceQuantity: number;
            /**
             * 网络制式：4G，5G。
             * @example `4G`
             */
            NetworkType: string;
        }[];
    };
}

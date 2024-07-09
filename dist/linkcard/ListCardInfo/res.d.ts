export interface ListCardInfoResponse {
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
     * - true：调用成功。
     * - false：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 根据当前所在地展示对应语言的错误提示。
     * @example `InstanceId cannot be empty.`
     */
    LocalizedMessage: string;
    /**
     * 返回页面信息。
     */
    Data: {
        /**
         * 查询页数。
         * @example `1`
         */
        PageNo: number;
        /**
         * 每页显示的数量。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总页数。
         * @example `20`
         */
        PageCount: number;
        /**
         * 符合条件的物联网卡总数。
         * @example `199`
         */
        Total: number;
        /**
         * 卡列表。
         */
        List: {
            /**
             * 卡的状态。
             * - **10**：可测试。
             * - **20**：未使用。
             * - **30**：使用中。
             * - **35**：已停用。
             * - **40**：已停机。
             * - **50**：已销户。
             * @example `35`
             */
            Status: string;
            /**
             * 流量类型。
             * - **singlecard**：单卡通用流量。
             * - **directionalcard**：单卡定向流量。
             * - **sameflowcard**：同档位池共享流量。
             * - **directional_sameflowcard**：同档位池共享定向流量。
             * - **unityPayPool**：统付池通用流量。
             * - **GREcard** ：统付池定向流量。
             * @example `sameflowcard`
             */
            DataType: string;
            /**
             * 定向分组名称。
             * @example `测试分组`
             */
            DirectionalGroupName: string;
            /**
             * 周期剩余流量。
             * @example `130.00MB`
             */
            PeriodRestFlow: string;
            /**
             * 套餐凭证类型。
             * @example `unityPayPool`
             */
            CredentialType: string;
            /**
             * 周期累计流量。
             * @example `0KB`
             */
            PeriodAddFlow: string;
            /**
             * 周期短信用量。
             * @example `0`
             */
            PeriodSmsUse: string;
            /**
             * 流量包档位。
             * @example `30MB`
             */
            DataLevel: string;
            /**
             * 物联网卡的具体状态。
             * - **10**：测试期。
             * - **20**：静默期。
             * - **100**：使用中。
             * - **150**：部分使用中。
             * - **200**：主动停用。
             * - **300**：达量停用。
             * - **400**：信控停用。
             * - **500**：换绑停用。
             * - **600**：实名停用。
             * - **700**：异常停用。
             * - **40**：已停机。
             * - **50**：已销户。
             * @example `300`
             */
            OsStatus: string;
            /**
             * 自动化规则的通知ID。
             * @example `11111`
             */
            NotifyId: string;
            /**
             * 资费版本。
             * @example `ali_2`
             */
            AliFee: string;
            /**
             * 物联网卡关联的订单编号。
             * @example `211519634******`
             */
            AliyunOrderId: string;
            /**
             * 物联网卡的激活方式。
             * - **firstdatarecord**：首话单激活。
             * - **carrierstatuspush**：运营商状态推送激活。
             * - **silence_expire**：沉默期结束激活。
             * - **manage**：手动激活。
             * - **testflowdepleted**：测试期流量超出后激活。
             * @example `first_data_record`
             */
            ActiveType: string;
            /**
             * 套餐是否自动续费。
             * - true：是。
             * - false：否。
             * @example `true`
             */
            IsAutoRecharge: boolean;
            /**
             * 凭证实例ID。
             * @example `2622***`
             */
            CredentialInstanceId: string;
            /**
             * 套餐到期时间。
             * @example `2022-04-30 23:59:59`
             */
            ExpireTime: string;
            /**
             * APN名称。
             * @example `cmiot`
             */
            ApnName: string;
            /**
             * 激活时间。
             * @example `2021-11-16 16:35:50`
             */
            ActiveTime: string;
            /**
             * 物联网卡的ICCID。
             * @example `89860321******15668`
             */
            Iccid: string;
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
             * 套餐结算周期。
             * - **1101**：月度。
             * - **1103**：季度。
             * - **1106**：半年度。
             * - **1112**：年度。
             * @example `1101`
             */
            Period: string;
            /**
             * 认证方式。
             * enterprise：企业认证。
             * @example `enterprise`
             */
            CertifyType: string;
            /**
             * 私网网段（定向卡）。
             * @example `1.*.3.*`
             */
            PrivateNetworkSegment: string;
            /**
             * 开户时间。
             * @example `2021-11-29 16:12:14`
             */
            OpenAccountTime: string;
            /**
             * SIM卡类型。
             * - **nano**：插拔三切卡（消费级）。
             * - **micro**：插拔双切卡（消费级）。
             * - **normal**：插拔大卡（消费级）。
             * - **simplus56**：贴片卡5*6（消费级）。
             * - **simplus22**：贴片卡2*2（消费级）。
             * - **industry-normal**：插拔大卡（工业级）。
             * - **industry-micro**：插拔双切卡（工业级）。
             * - **industry-nano**：插拔三切卡（工业级）。
             * - **simplus**：贴片卡5*6（工业级）。
             * - **industry-simplus22**：贴片卡2*2（工业级）。
             * @example `nano`
             */
            SimType: string;
            /**
             * 物联网卡的InstanceId值。
             * @example `123456`
             */
            VsimInstanceId: number;
            /**
             * 套餐凭证。
             * @example `CM-***-*-2-**M`
             */
            CredentialNo: string;
            /**
             * 物联网卡的标签。
             */
            TagList: {
                /**
                 * 标签名称。
                 * @example `测试标签`
                 */
                TagName: string;
                /**
                 * 标签ID。
                 * @example `24`
                 */
                Id: number;
            }[];
            /**
             * 物联网卡的IMSI。
             */
            Imsi: string[];
            /**
             * 物联网卡的MSISDN。
             */
            Msisdn: string[];
            /**
             * 备注信息。
             * @example `备注信息`
             */
            Remark: string;
            /**
             * 定向分组ID。
             * @example `55`
             */
            DirectionalGroupId: number;
            /**
             * 网络制式：4G，5G。
             * @example `4G`
             */
            NetworkType: string;
            /**
             * 用量更新时间
             * @example `2023-08-15 18:20:11`
             */
            FlowLatestModifiedTime: string;
        }[];
    };
}

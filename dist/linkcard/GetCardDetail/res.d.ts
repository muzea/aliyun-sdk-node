export interface GetCardDetailResponse {
    /**
     * 接口返回码。
     * - **200**：表示成功。
     * - 其它：表示错误码。错误码详情，请参见[错误码](~~375339~~)。
     * @example `200`
     */
    Code: string;
    /**
     * 请求ID，阿里云为该请求生成的标识符。
     * @example `E4F94B97-1D64-4080-BFD2-67461667AA43`
     */
    RequestId: string;
    /**
     * 调用失败时，返回的错误信息。
     * @example `InstanceId cannot be empty.`
     */
    ErrorMessage: string;
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
     * 物联网卡的详情信息。
     */
    Data: {
        /**
         * 多网卡的子卡详情。
         */
        ListPsimCards: {
            /**
             * 物联网卡的状态。
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
             * 私网网段（定向卡）。
             * @example `*.2.*.4`
             */
            PrivateNetworkSegment: string;
            /**
             * 物联网卡的具体状态。
             * - **10**：测试期。
             * - **20**：静默期。
             * - **100**：使用中。
             * - **130**：测试期换绑停用。
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
             * 实名认证状态。
             * - **1**：未认证。
             * - **2**：已认证。
             * @example `2`
             */
            CertifyStatus: string;
            /**
             * APN名称。
             * @example `cmiot`
             */
            ApnName: string;
            /**
             * 周期累计流量。
             * @example `130.00MB`
             */
            PeriodAddFlow: string;
            /**
             * 子卡的ICCID。
             * @example `89860321******15668`
             */
            Iccid: string;
            /**
             * 运营商。
             * - **CMCC**：移动。
             * - **CUCC**：联通。
             * - **CTCC**：电信。
             * @example `CMCC`
             */
            Vendor: string;
            /**
             * 周期短信用量。
             * @example `0`
             */
            PeriodSmsUse: string;
            /**
             * 子卡的IMSI。
             */
            Imsi: string[];
            /**
             * 子卡的MSISDN。
             */
            Msisdn: string[];
            /**
             * 短信功能开通情况。
             *  - **true**：开通。
             * - **false**：关闭。
             * @example `true`
             */
            OpenSms: boolean;
            /**
             * 物联网卡的IP地址。
             */
            Ip: string[];
        }[];
        /**
         * 物联网卡的详情。
         * 当查询多网卡时，展示虚拟卡信息。
         */
        VsimCardInfo: {
            /**
             * 物联网卡状态。
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
             * - **GREcard**：统付池定向流量。
             * @example `sameflowcard`
             */
            DataType: string;
            /**
             * 物联网卡达量限速阈值，单位为KB。（暂不支持）
             * @example `1024`
             */
            CardLimitSpeedThreshold: number;
            /**
             * 周期剩余流量。
             * @example `130.00MB`
             */
            PeriodRestFlow: string;
            /**
             * 定向分组名称。
             * @example `测试分组`
             */
            DirectionalGroupName: string;
            /**
             * 套餐凭证类型。
             * - 单卡套餐示例：CT-SC-M-1-30M（运营商-套餐类型-套餐周期-资费版本-流量包档位）。
             * - 同档位池套餐示例：CM-SF-M-3-100M（运营商-套餐类型-套餐周期-资费版本-流量包档位）。
             * - 统付池套餐示例：CU-UPG-M-2-池编号（运营商-套餐类型-套餐周期-资费版本-池编号）。
             * @example `CT-SC-M-1-30M`
             */
            CredentialType: string;
            /**
             * 周期累计流量。
             * @example `0KB`
             */
            PeriodAddFlow: string;
            /**
             * 定向分组ID。
             * @example `22`
             */
            DirectionalGroupId: string;
            /**
             * 周期短信用量。
             * @example `0`
             */
            PeriodSmsUse: string;
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
             * @example `200`
             */
            OsStatus: string;
            /**
             * 自动化规则的通知ID。
             * @example `11111`
             */
            NotifyId: string;
            /**
             * 流量包档位。
             * @example `30MB`
             */
            DataLevel: string;
            /**
             * 物联网卡的标签。
             * @example `测试标签`
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
             * 物联网卡关联的订单编号。
             * @example `211519634******`
             */
            AliyunOrderId: string;
            /**
             * 资费版本。
             * @example `ali_2`
             */
            AliFee: string;
            /**
             * 激活方式。
             * - **first_data_record**：首话单激活。
             * - **carrier_status_push**：运营商状态推送激活。
             * - **silence_expire**：静默期结束激活。
             * - **manage**：手动激活。
             * - **test_flow_depleted**：测试流量超套激活。
             * @example `first_data_record`
             */
            ActiveType: string;
            /**
             * 套餐是否自动续费。
             * - **true**：是。
             * - **false**：否。
             * @example `true`
             */
            IsAutoRecharge: boolean;
            /**
             * 达量停用后，次月是否自动复用。
             * - **true**：是。
             * - **false**：否。
             * @example `true`
             */
            AutoLimitResume: boolean;
            /**
             * 凭证实例ID。
             * @example `2622***`
             */
            CredentialInstanceId: string;
            /**
             * 凭证达量限速阈值，单位为KB。（暂不支持）。
             * @example `1024`
             */
            CredentialLimitSpeedThreshold: number;
            /**
             * 套餐到期时间。
             * @example `2022-04-30 23:59:59`
             */
            ExpireTime: string;
            /**
             * 阈值流量单位。
             * @example `KB`
             */
            FlowThresholdUnit: string;
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
             * 物联网卡达量停用阈值，单位为KB。（暂不支持）
             * @example `20480`
             */
            CardLimitStopThreshold: number;
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
             * 认证方式。
             * enterprise：企业认证。
             * @example `enterprise`
             */
            CertifyType: string;
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
             * 实名认证状态。
             * - **1**：未认证。
             * - **2**：已认证。
             * @example `2`
             */
            CertifyStatus: string;
            /**
             * 设备的IMEI号。
             * @example `11111111******`
             */
            DeviceImei: string;
            /**
             * 物联网卡的InstanceId值。
             * @example `123456`
             */
            VsimInstanceId: number;
            /**
             * 自动换绑重用。
             * - **true**：开。
             * - **false**：关。
             * @example `false`
             */
            AutoRebindReuse: boolean;
            /**
             * 套餐凭证。
             * @example `CM-***-*-2-**M`
             */
            CredentialNo: string;
            /**
             * 凭证达量停用阈值。
             * @example `20480`
             */
            CredentialLimitStopThreshold: number;
            /**
             * 物联网卡的IMSI。
             */
            Imsi: string[];
            /**
             * 物联网卡的MSISDN。
             */
            Msisdn: string[];
            /**
             * 短信功能开通情况。
             * - true：开通。
             * - false：关闭。
             * @example `true`
             */
            OpenSms: boolean;
            /**
             * 物联网卡的IP地址。
             */
            Ip: string[];
        };
    };
}

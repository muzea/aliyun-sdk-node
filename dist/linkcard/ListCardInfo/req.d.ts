export interface ListCardInfoRequest {
    /**
     * 物联网卡的激活时间区间：结束时间。
     * 格式为：`yyyy-MM-dd HH:mm:ss`。
     * @example `2022-05-25 23:59:59`
     */
    "ActiveTimeEnd"?: string;
    /**
     * 每页的数量，支持10、15、25、40。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 物联网卡的ICCID。
     * 您可在物联网卡上查看ICCID，或者在[物联网SIM服务控制台](https://dyiotnext.console.aliyun.com/?spm=a2c4g.11186623.0.0.6a072d25p4pUg8)的**卡管理页面**查看ICCID。
     * @example `89860321******15668`
     */
    "Iccid"?: string;
    /**
     * 套餐凭证。
     * @example `CM-***-*-2-**M`
     */
    "CredentialNo"?: string;
    /**
     * 运营商。
     * - **CMCC**：移动。
     * - **CUCC**：联通。
     * - **CTCC**：电信。
     * - **VNO**：虚拟运营商。
     * @example `CMCC`
     */
    "Vendor"?: string;
    /**
     * 查询页数，需结合**PageSize**参数组合使用。
     * @example `1`
     */
    "PageNo": number;
    /**
     * 物联网卡的MSISDN。
     * @example `1440993******`
     */
    "Msisdn"?: string;
    /**
     * 物联网卡关联的订单编号。
     * @example `211519634******`
     */
    "AliyunOrderId"?: string;
    /**
     * 资费版本。
     * @example `ali_2`
     */
    "AliFee"?: string;
    /**
     * 套餐结算周期。
     * - **1101**：月度。
     * - **1103**：季度。
     * - **1106**：半年度。
     * - **1112**：年度。
     * @example `1101`
     */
    "Period"?: string;
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
    "DataType"?: string;
    /**
     * 物联网卡的激活时间区间：开始时间。
     * 格式为：`yyyy-MM-dd HH:mm:ss`。
     * @example `2022-05-25 23:59:59`
     */
    "ActiveTimeStart"?: string;
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
    "SimType"?: string;
    /**
     * 物联网卡的套餐结束时间。
     * 格式为：`yyyy-MM-dd HH:mm:ss`
     * @example `2022-05-25 23:59:59`
     */
    "ExpireTimeEnd"?: string;
    /**
     * 套餐是否自动续费。
     * - **true**：是。
     * - **false**：否。
     * @example `true`
     */
    "IsAutoRecharge"?: boolean;
    /**
     * 物联网卡的套餐开始时间。
     * 格式为：`yyyy-MM-dd HH:mm:ss`
     * @example `2022-05-25 23:59:59`
     */
    "ExpireTimeStart"?: string;
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
    "OsStatus"?: string;
    /**
     * 自动化规则的通知ID。
     * @example `11111`
     */
    "NotifyId"?: string;
    /**
     * 流量包档位。
     * @example `30MB`
     */
    "DataLevel"?: string;
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
    "Status"?: string;
    /**
     * 标签名称。
     * @example `测试标签`
     */
    "TagName"?: string;
    /**
     * 认证方式。
     * 仅支持enterprise：企业认证。
     * @example `enterprise`
     */
    "CertifyType"?: string;
    /**
     * 定向分组ID。
     * @example `22`
     */
    "DirectionalGroupId"?: string;
    /**
     * APN名称。
     * @example `cmiot`
     */
    "ApnName"?: string;
    /**
     * 物联网卡的IMSI。
     * @example `460081937******`
     */
    "Imsi"?: string;
    /**
     * 池编号。
     * @example `test1`
     */
    "PoolId"?: string;
    /**
     * 周期用量区间筛选：最小用量（单位MB）。
     * @example `20`
     */
    "MinFlow"?: string;
    /**
     * 周期用量区间筛选：最大用量（单位MB）。
     * @example `30`
     */
    "MaxFlow"?: string;
    /**
     * 单卡周期流量剩余比例，仅支持如下三个参数。
     * 0.1：剩余10%
     * 0.2：剩余20%
     * 0.3：剩余30%
     * @example `0.2`
     */
    "MaxRestFlowPercentage"?: number;
    /**
     * 网络制式：4G，5G。
     * @example `4G`
     */
    "NetworkType"?: string;
}

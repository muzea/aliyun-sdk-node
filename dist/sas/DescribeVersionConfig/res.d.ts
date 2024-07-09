export interface DescribeVersionConfigResponse {
    /**
     * 购买多版本时的总授权数。
     * @example `5000`
     */
    MVAuthCount: number;
    /**
     * 是否已购买日志分析。取值：
     * - **0**：未购买
     * - **1**：已购买
     * @example `1`
     */
    SasLog: number;
    /**
     * 是否已购买安全大屏。取值：
     * - **0**：未购买
     * - **1**：已购买
     * @example `0`
     */
    SasScreen: number;
    /**
     * 已购买的蜜罐授权台数。
     * @example `20`
     */
    HoneypotCapacity: number;
    /**
     * 购买多版本时总剩余授权数。
     * @example `40`
     */
    MVUnusedAuthCount: number;
    /**
     * 是否开启了网页防篡改服务。取值：
     * - **0**：未开启
     * - **1**：已开启
     * @example `0`
     */
    WebLock: number;
    /**
     * 应用白名单授权数。
     * > 一个授权可为一台服务器应用白名单策略。开通应用白名单功能后，该账号默认拥有20个授权。
     * @example `20`
     */
    AppWhiteListAuthCount: number;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `C2DC96D2-DD2E-49D9-A28E-85590475DF55`
     */
    RequestId: string;
    /**
     * 上一次试用云安全中心的截止时间戳，单位为毫秒。
     * @example `1603934844000`
     */
    LastTrailEndTime: number;
    /**
     * 已购买的云安全中心版本。 取值：
     * - **1**：免费版
     * - **3**：企业版
     * - **5**：高级版
     * - **6**：防病毒版
     * - **7**：旗舰版
     * - **8**：多版本
     * - **10**：仅采购增值服务
     * @example `3`
     */
    Version: number;
    /**
     * 已购买的网页防篡改的授权数。1个授权可为1台服务器开启网页防篡改保护。取值范围：0~N。
     * > N为您保有的服务器数量。
     * @example `0`
     */
    WebLockAuthCount: number;
    /**
     * 云安全中心实例到期时间戳，单位为毫秒。
     * > 如果服务到期7天后您未进行续费，您的付费版实例将降级为免费版，您将无法继续使用付费版本的功能，您之前的云安全中心配置数据和历史告警数据（例如：DDoS告警等）将无法查看。此时，您只有通过重新购买来启用云安全中心付费版服务。更多信息请参见[购买云安全中心](~~42308~~)。
     * @example `1625846400000`
     */
    ReleaseTime: number;
    /**
     * 购买安全中心最高版本。取值：
     * - **1**：免费版
     * - **3**：企业版
     * - **5**：高级版
     * - **6**：防病毒版
     * - **7**：旗舰版
     * - **10**：仅采购增值服务
     * > 购买是单版本则表示对应的版本，购买为多版本时，该值表示购买云安全中心多版本中的最高版本。
     * @example `1`
     */
    HighestVersion: number;
    /**
     * 已购买的服务器授权数。
     * @example `30`
     */
    AssetLevel: number;
    /**
     * 现有服务器台数是否超过购买的最大授权数。取值：
     * - **false**：未超过
     * - **true**：已超过
     * @example `false`
     */
    IsOverBalance: boolean;
    /**
     * 已购买的云安全中心实例ID。
     * @example `sas-vg6hafdsafs****`
     */
    InstanceId: string;
    /**
     * 已购买的日志存储容量，单位为GB。取值范围：0~200000。
     * @example `10240`
     */
    SlsCapacity: number;
    /**
     * 已购买的授权核数。
     * @example `10`
     */
    VmCores: number;
    /**
     * 是否允许按量购买。
     * - **0**：不允许
     * - **1**：允许
     * @example `1`
     */
    AllowPartialBuy: number;
    /**
     * 是否开启应用白名单。取值：
     * - **0**：未开启
     * - **2**：已开启
     * @example `2`
     */
    AppWhiteList: number;
    /**
     * 已购镜像扫描授权数。
     * @example `8954`
     */
    ImageScanCapacity: number;
    /**
     * 当前云安全中心版本是否是试用版本。取值：
     * - **0**：非试用版本
     * - **1**：试用版本
     * @example `0`
     */
    IsTrialVersion: number;
    /**
     * 是否开启自定义告警功能。取值：
     * - **0**：未开启
     * - **2**：已开启
     * @example `0`
     */
    UserDefinedAlarms: number;
    /**
     * 开通服务时间戳，单位：毫秒。
     * @example `1657244824669`
     */
    OpenTime: number;
    /**
     * 是否是新旗舰版。
     * - **true**：是最新版
     * - **false**：不是最新版
     * @example `true`
     */
    IsNewContainerVersion: boolean;
    /**
     * 是否是新多版本。
     * - **true**：是最新多版本
     * - **false**：不是最新多版本
     * @example `true`
     */
    IsNewMultiVersion: boolean;
    /**
     * 已购威胁分析容量。单位：GB。
     * @example `25`
     */
    ThreatAnalysisCapacity: number;
    /**
     * 已购云平台配置检查扫描数。单位：次/月。
     * @example `10`
     */
    CspmCapacity: number;
    /**
     * 已购漏洞修复数。单位：次/月。
     * @example `10`
     */
    VulFixCapacity: number;
    /**
     * 已购应用防护数。单位：个/月。
     * @example `10`
     */
    RaspCapacity: number;
    /**
     * 无代理检测数。
     * >无代理检测暂未售卖，现无需关注该字段。
     * @example `10`
     */
    AgentlessCapacity: number;
    /**
     * 是否开通按量付费。取值：
     * - **false**：未开通
     * - **true**：已开通
     * @example `true`
     */
    IsPostpay: boolean;
    /**
     * 按量付费实例ID。
     * @example `postpay-sas-**`
     */
    PostPayInstanceId: string;
    /**
     * 按量付费模块开关。取值：
     * - **VUL**：漏洞修复模块
     * @example `{"VUL":1}`
     */
    PostPayModuleSwitch: string;
    /**
     * 按量付费实例状态。取值：
     * - **1**：正常
     * - **2**：欠费停机
     * @example `1`
     */
    PostPayStatus: number;
    /**
     * 按量付费开通时间。
     * @example `1698915219000`
     */
    PostPayOpenTime: number;
    /**
     * 恶意文件检测SDK授权数。
     * @example `10`
     */
    SdkCapacity: number;
    /**
     * 防勒索管家服务。取值：
     * - **0**：未开通
     * - **1**：已开通
     * @example `1`
     */
    AntiRansomwareService: number;
    /**
     * 是否开通新版威胁分析与响应服务。新版威胁分析与响应服务，是指支持购买接入流量和日志存储容量的威胁分析与响应服务。取值：
     * - **0**：否
     * - **1**：是
     * @example `1`
     */
    NewThreatAnalysis: number;
    /**
     * 已购买的威胁分析与响应日志接入流量。单位为GB/天。
     * @example `10`
     */
    ThreatAnalysisFlow: number;
}

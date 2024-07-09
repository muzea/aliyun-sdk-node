export interface CreateSmartAccessGatewayRequest {
    /**
     * 智能接入网关实例的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 智能接入网关实例的带宽。
     * - 如果要创建智能接入网关硬件版实例，且智能接入网关设备规格为**sag-100wm**，带宽取值范围为**2**~**50** Mbps。
     * - 如果要创建智能接入网关硬件版实例，且智能接入网关设备规格为**sag-1000**，带宽取值范围为**10**~**500** Mbps。
     * - 如果要创建智能接入网关vCPE版实例，带宽取值范围为**10**~**1000** Mbps。
     *
     * @example `12`
     */
    "MaxBandWidth"?: number;
    /**
     * 智能接入网关实例名称。
     * 名称长度为2~128个字符，以大小写字母或中文开头，可包含数字、半角句号（.）、下划线（_）或短划线（-）。
     * @example `testname`
     */
    "Name"?: string;
    /**
     * 智能接入网关实例的描述信息。
     * 描述长度为2~256个字符，以大小写字母或中文开头，可包含数字、半角句号（.）、下划线（_）或短划线（-）。
     * @example `testdesc`
     */
    "Description"?: string;
    /**
     * 智能接入网关实例的购买时长，单位：月。
     * 取值：**1**~**9**、**12**、**24**、**36**。
     * @example `12`
     */
    "Period": number;
    /**
     * 是否自动支付预付费实例的账单。取值：
     * - **true**：是。
     * - **false**（默认值）：否。
     * 如果您选择不自动支付账单，在您调用本接口后，请前往控制台的订单中心完成支付，实例才能创建成功。
     * @example `false`
     */
    "AutoPay": boolean;
    /**
     * 智能接入网关实例类型。取值：
     * - **sag-100wm**。
     * - **sag-1000**。
     * - **sag-vcpe**。
     * @example `sag-100wm`
     */
    "HardWareSpec": string;
    /**
     * 智能接入网关设备收货国家。
     * @example `中国`
     */
    "ReceiverCountry": string;
    /**
     * 智能接入网关设备收货省份。
     * @example `浙江`
     */
    "ReceiverState": string;
    /**
     * 智能接入网关设备收货城市。
     * @example `杭州`
     */
    "ReceiverCity": string;
    /**
     * 智能接入网关设备收货街区。
     * @example `西湖`
     */
    "ReceiverDistrict": string;
    /**
     * 智能接入网关设备收货乡镇。
     * @example `转塘`
     */
    "ReceiverTown": string;
    /**
     * 智能接入网关设备收货省份邮编。
     * @example `310000`
     */
    "ReceiverZip": string;
    /**
     * 智能接入网关设备收件人电话。
     * @example `8585****`
     */
    "ReceiverPhone"?: string;
    /**
     * 智能接入网关设备收件人手机号。
     * @example `1884085****`
     */
    "ReceiverMobile": string;
    /**
     * 智能接入网关设备收件人姓名。
     * @example `张三`
     */
    "ReceiverName": string;
    /**
     * 智能接入网关设备收货人的电子邮箱。
     * @example `xx@example.com`
     */
    "ReceiverEmail": string;
    /**
     *  买家留言信息。
     * @example `留言`
     */
    "BuyerMessage": string;
    /**
     * 智能接入网关设备收货详细地址。
     * @example `XX号`
     */
    "ReceiverAddress": string;
    /**
     * 选择一种使用方式。取值：
     * - **no_backup**：只购买一台智能接入网关设备接入阿里云。
     * - **cold_backup**：购买两台智能接入网关设备共享带宽，仅主设备在线。当主设备发生故障时，需手动切换至备设备。
     * - **warm_backup**：购买两台智能接入网关设备共享带宽，两台设备同时在线。当主设备故障时自动切换到备设备。
     * > 在您创建智能接入网关vCPE实例时，本参数仅取值**warm_backup**。
     * @example `no_backup`
     */
    "HaType": string;
    /**
     * 智能接入网关实例的计费类型。
     * 取值：  **PREPAY**，预付费。
     * @example `PREPAY`
     */
    "ChargeType": string;
    /**
     * 是否已拥有智能接入网关设备。取值：
     * - **true**：是。
     * - **false**（默认值）：否。
     * @example `false`
     */
    "AlreadyHaveSag"?: boolean;
    /**
     * 在创建智能接入网关vCPE实例时的版本。
     * 取值：**basic**，基础版。
     * @example `basic`
     */
    "CPEVersion"?: string;
}

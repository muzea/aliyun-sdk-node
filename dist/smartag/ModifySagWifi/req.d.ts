export interface ModifySagWifiRequest {
    /**
     * 智能接入网关实例地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 智能接入网关实例ID。
     * @example `sag-whfn****`
     */
    "SmartAGId": string;
    /**
     * 绑定的智能接入网关设备的序列号。
     * @example `sag32a30****`
     */
    "SmartAGSn": string;
    /**
     * Wi-Fi功能是否开启。取值：
     * - **True**：开启。
     * - **False**：不开启。
     * @example `True`
     */
    "IsEnable": string;
    /**
     * Wi-Fi名称。
     * 名称长度为1~31个字符，可包含数字、大小写字母。
     * @example `aliyun_sag_123456****`
     */
    "SSID"?: string;
    /**
     * Wi-Fi广播能力是否打开。取值：
     * - **True**：开启。
     * - **False**：不开启。
     * >开启SSID广播后，无线设备才能搜索到该SSID名称的Wi-Fi信号。
     * @example `True`
     */
    "IsBroadcast"?: string;
    /**
     * 信道。
     * 取值范围：**0~11**。
     * @example `0`
     */
    "Channel"?: string;
    /**
     * 频道带宽。取值：
     * - **自动**。
     * - **20MHz**。
     * - **40MHz**。
     * @example `自动`
     */
    "Bandwidth"?: string;
    /**
     * 无线安全是否打开。取值：
     * - **True**：开启。
     * - **False**：不开启。
     * @example `True`
     */
    "IsAuth"?: string;
    /**
     * 认证类型。取值：
     * - **NONE**。
     * - **WPA-PSK**。
     * - **WPA2-PSK**。
     * @example `WPA2-PSK`
     */
    "AuthenticationType"?: string;
    /**
     * 加密算法。取值：
     * - **AUTO**：自动加密。
     * - **TKIP**：临时密钥完整性协议。
     * - **AES**：Wi-Fi授权的高效加密标准。
     * @example `AUTO`
     */
    "EncryptAlgorithm"?: string;
    /**
     * Wi-Fi密码。
     * 密码长度为8~32位字符，可包含数字、大小写字母。
     * @example `12345678`
     */
    "Password"?: string;
}

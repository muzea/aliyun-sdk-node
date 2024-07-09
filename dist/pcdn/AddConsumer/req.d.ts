export interface AddConsumerRequest {
    /**
     * 版本号。
     * @example `2017-04-11`
     */
    "Version": string;
    /**
     * 业务类型。
     * - **download**：大文件下载。
     * - **live**：直播流媒体。
     * - **vod**：视音频点播。
     * @example `download`
     */
    "BusinessType": string;
    /**
     * 公司名称。
     * @example `alibaba`
     */
    "Company": string;
    /**
     * 网站网址。
     * @example `example.com`
     */
    "Site": string;
    /**
     * 需求描述。
     * @example `yourRequirement`
     */
    "Requirement": string;
    /**
     * 电话号码。
     * @example `151016****`
     */
    "Mobile": string;
    /**
     * 固定参数，默认为空。
     * @example `Ca`
     */
    "Ca"?: string;
    /**
     * 操作者。
     * @example `pop`
     */
    "Operator"?: string;
    /**
     * 电子邮箱。
     * @example `username@example.com`
     */
    "Email"?: string;
    /**
     * 带宽需求。单位：5Gbps。
     * @example `1`
     */
    "BandwidthRequirement"?: string;
}

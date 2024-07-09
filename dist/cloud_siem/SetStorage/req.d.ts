export interface SetStorageRequest {
    /**
     * 日志存储天数，默认180天。该值最小设置为30天，最大不能超过3000天。
     * @example `180`
     */
    "Ttl": number;
    /**
     * 日志存储地域。
     * 数据管理中心所在地为**cn-hangzhou**时，**Region**默认为上海（cn-shanghai）；数据管理中心所在地为**ap-southeast-1**时，**Region**默认为新加坡（ap-southeast-1）。
     * 不可以修改日志存储地域。如需修改，请联系威胁分析的运营人员。
     * @example `cn-shanghai`
     */
    "Region"?: string;
    /**
     * 视图类型。
     * - 0：当前阿里云账号视图。
     * - 1：企业下所有账号的视图。
     * @example `1`
     */
    "RoleType"?: number;
    /**
     * 管理员切换成其他成员视角的用户ID。
     * @example `113091674488****`
     */
    "RoleFor"?: number;
    /**
     * 威胁分析的数据管理中心所在地。您需要根据资产所在地域，选择管理中心所在地。取值：
     * - cn-hangzhou：资产属于中国内地与中国香港，选择该项。
     * - ap-southeast-1：资产属于海外地域，选择该项。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}

export interface CountActivatedOrNewRegistrationDeviceRequest {
    /**
     * 项目ID
     * @example `projectTest`
     */
    "ProjectId"?: string;
    /**
     * 设备类型
     * @example `car_auto`
     */
    "DeviceType"?: string;
    /**
     * 设备品牌ID
     * @example `15`
     */
    "DeviceBrandId"?: string;
    /**
     * 设备品牌名称
     * @example `ROEWE`
     */
    "DeviceBrand"?: string;
    /**
     * 设备型号ID
     * @example `105`
     */
    "DeviceModelId"?: string;
    /**
     * 设备型号名称
     * @example `ROEWE RX5`
     */
    "DeviceModel"?: string;
    /**
     * 统计粒度类型，byDay表示按日，byMonth表示按月
     * @example `byDay`
     */
    "DeviceCountStatType"?: string;
    /**
     * 是否查看激活设备, true表示是,表示查询设备激活的变化曲线;false表示否，表示查询设备活跃的变化曲线。
     * @example `false`
     */
    "IsQueryNewRegistrationDevice"?: string;
    /**
     * 开始时间
     * @example `2018-08-15 12:00:00`
     */
    "StartTime": string;
    /**
     * 结束时间
     * @example `2018-08-25 12:00:00`
     */
    "EndTime": string;
    /**
     * 是否以年维度查询活跃设备趋势
     * @example `false`
     */
    "IsQueryYearlyActivate"?: string;
}

export interface ModifyVSwitchCidrReservationAttributeRequest {
    /**
     * 要修改的交换机预留网段的实例ID。
     * @example `vcr-bp1m12saqteraw3rp****`
     */
    "VSwitchCidrReservationId": string;
    /**
     * 要修改的交换机预留网段的名称。
     * 名称长度为2~128个字符，以英文字母或中文开头，可包含数字、下划线（_）和短划线（-）。
     * @example `ReservationName`
     */
    "VSwitchCidrReservationName"?: string;
    /**
     * 要修改的交换机预留网段的描述信息。不填则为空，默认值为空。
     * 描述长度为2~256个字符，以英文字母或中文开头，不能以`http://`和`https://`开头。
     * @example `ReservationDescription`
     */
    "VSwitchCidrReservationDescription"?: string;
    /**
     * 交换机所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}

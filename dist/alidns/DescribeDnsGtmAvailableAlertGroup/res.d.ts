export interface DescribeDnsGtmAvailableAlertGroupResponse {
    /**
     * 唯一请求识别码。
     * @example `6856BCF6-11D6-4D7E-AC53-FD579933522B`
     */
    RequestId: string;
    /**
     * 可设置的报警组。
     * @example `[\"测试报警组\",\"研发报警组\"]`
     */
    AvailableAlertGroup: string;
}

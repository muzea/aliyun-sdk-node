export interface CancelAutoSnapshotPolicyRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 自动快照策略ID。
     * @example `sp-78lhzpe7kjfnd****`
     */
    "PolicyId": string;
    /**
     * 云电脑ID。可以设置1\~50个。一旦传入该值，则不允许为空字符串。最多支持64个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
     */
    "DesktopId": string[];
}

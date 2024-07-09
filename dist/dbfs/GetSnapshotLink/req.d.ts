export interface GetSnapshotLinkRequest {
    /**
     * 所属的地域ID。您可以调用[DescribeRegions](https://help.aliyun.com/document_detail/25609.html)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 快照链ID。
     * @example `sl-b3zlgraysgcs9jy********`
     */
    "LinkId"?: string;
}

export interface GetChangeSetRequest {
    /**
     * 是否获取模板，取值：
     * - true：获取模板。
     * - false（默认值）：不获取模板。
     * @example `false`
     */
    "ShowTemplate"?: boolean;
    /**
     * 更改集所属的地域ID。您可以调用[DescribeRegions](~~131035~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 更改集ID。
     * @example `4c11658d-bd47-4dd0-ba64-727edc62****`
     */
    "ChangeSetId": string;
}

export interface DescribeFabricConsortiumOrderersRequest {
    /**
     * 联盟ID
     * @example `consortium-aaaaaa-akpcsjjac2jd	`
     */
    "ConsortiumId": string;
    /**
     * 实例所在的位置信息，和RegionId一致
     * @example `cn-hangzhou`
     */
    "Location"?: string;
}

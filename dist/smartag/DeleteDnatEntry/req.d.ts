export interface DeleteDnatEntryRequest {
    /**
     * 智能接入网关实例所属地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 智能接入网关实例ID。
     * @example `sag-ntwc9r1a6z3xz0****`
     */
    "SagId": string;
    /**
     * DNAT条目ID。
     * 您可以通过调用[DescribeDnatEntries](~~125450~~)接口获取智能接入网关实例的DNAT条目ID。
     * @example `fwd-kxe4fq3xuzczze****`
     */
    "DnatEntryId": string;
}

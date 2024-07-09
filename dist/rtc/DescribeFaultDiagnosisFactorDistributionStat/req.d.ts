export interface DescribeFaultDiagnosisFactorDistributionStatRequest {
    /**
     * APP ID。
     * @example `0rbd****
    `
     */
    "AppId": string;
    /**
     * 查询的开始时间，使用UNIX时间戳表示，单位：秒。
     * @example `1615892596`
     */
    "StartTs": number;
    /**
     * 查询的结束时间，使用UNIX时间戳表示，单位：秒。
     * @example `1615892596****`
     */
    "EndTs": number;
}

export interface UpdateApplicationRequest {
    /**
     * 应用ID，将更新此应用的信息
     * @example `wa-5d1af9c802470221ab7*****`
     */
    "AppId"?: string;
    /**
     * 应用描述信息
     * @example `This is a updated Description`
     */
    "AppDescription"?: string;
    "RegionId"?: string;
}

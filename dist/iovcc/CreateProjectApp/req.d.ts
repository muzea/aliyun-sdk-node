export interface CreateProjectAppRequest {
    /**
     * 项目ID
     * @example `P0VFCREU`
     */
    "ProjectId": string;
    /**
     * 应用名称
     * @example `calendar`
     */
    "AppName": string;
    /**
     * 应用的包名
     * @example `com.demo.calendar`
     */
    "AppPkgName": string;
    /**
     * 系统类型，1：Android
     * @example `1`
     */
    "OsType": number;
}

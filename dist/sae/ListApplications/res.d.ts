export interface ListApplicationsResponse {
    /**
     * 调用结果的附加信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `B4D805CA-926D-41B1-8E63-7AD0C1ED****`
     */
    RequestId: string;
    /**
     * 应用列表。
     */
    Data: {
        /**
         * 当前页数。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 应用总个数。
         * @example `2`
         */
        TotalSize: number;
        /**
         * 页面大小。
         * @example `20`
         */
        PageSize: number;
        /**
         * 应用列表。
         */
        Applications: {
            /**
             * 应用名称。
             * @example `demo-app`
             */
            AppName: string;
            /**
             * 命名空间ID。
             * @example `cn-beijing:demo`
             */
            NamespaceId: string;
            /**
             * 是否正在删除应用。取值说明如下：
             * - **true**：应用正在被删除。
             * - **false**：应用没有被删除。
             * @example `false`
             */
            AppDeletingStatus: boolean;
            /**
             * 应用ID。
             * @example `f7730764-d88f-4b9a-8d8e-cd8efbfe****`
             */
            AppId: string;
            /**
             * 应用标签。
             */
            Tags: {
                /**
                 * 标签键。
                 * @example `key`
                 */
                Key: string;
                /**
                 * 标签值。
                 * @example `value`
                 */
                Value: string;
            }[];
            /**
             * 运行中的实例个数。
             * @example `2`
             */
            RunningInstances: number;
            /**
             * 应用实例个数。
             * @example `2`
             */
            Instances: number;
            /**
             * 地域ID。
             * @example `cn-beijing`
             */
            RegionId: string;
            /**
             * 应用描述信息。
             * @example `description`
             */
            AppDescription: string;
            /**
             * 每个实例所需的CPU，单位为毫核，不能为0。目前仅支持以下固定规格：
             * - **500**
             * - **1000**
             * - **2000**
             * - **4000**
             * - **8000**
             * - **16000**
             * - **32000**
             * @example `1000`
             */
            Cpu: number;
            /**
             * 每个实例所需的内存，单位为MB，不能为0。与CPU为一一对应关系，目前仅支持以下固定规格：
             * - **1024**：对应CPU为500毫核和1000毫核。
             * - **2048**：对应CPU为500、1000毫核和2000毫核。
             * - **4096**：对应CPU为1000、2000毫核和4000毫核。
             * - **8192**：对应CPU为2000、4000毫核和8000毫核。
             * - **12288**：对应CPU为12000毫核。
             * - **16384**：对应CPU为4000、8000毫核和16000毫核。
             * - **24576**：对应CPU为12000毫核。
             * - **32768**：对应CPU为16000毫核。
             * - **65536**：对应CPU为8000、16000和32000毫核。
             * - **131072**：对应CPU为32000毫核。
             * @example `1024`
             */
            Mem: number;
            MseEnabled: boolean;
            MseNamespaceId: string;
            BaseAppId: string;
            ProgrammingLanguage: string;
            Children: {
                AppName: string;
                NamespaceId: string;
                AppDeletingStatus: boolean;
                AppId: string;
                ScaleRuleEnabled: boolean;
                ScaleRuleType: string;
                Tags: {
                    Key: string;
                    Value: string;
                }[];
                RunningInstances: number;
                Instances: number;
                RegionId: string;
                AppDescription: string;
                Cpu: number;
                Mem: number;
                MseEnabled: boolean;
                BaseAppId: string;
                ProgrammingLanguage: string;
            }[];
        }[];
    };
    /**
     * 错误码。取值说明如下：
     * - 请求成功：不返回**ErrorCode**字段。
     * - 请求失败：返回**ErrorCode**字段。具体信息，请参见本文的**错误码**目录。
     * @example `空`
     */
    ErrorCode: string;
    /**
     * 接口状态或POP错误码。取值说明如下：
     * - **2xx**：成功。
     * - **3xx**：重定向。
     * - **4xx**：请求错误。
     * - **5xx**：服务器错误。
     * @example `200`
     */
    Code: string;
    /**
     * 获取应用列表。取值说明如下：
     * - **true**：获取成功。
     * - **false**：获取失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 当前页数。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 应用总个数。
     * @example `2`
     */
    TotalSize: number;
    /**
     * 页面大小。
     * @example `20`
     */
    PageSize: number;
}

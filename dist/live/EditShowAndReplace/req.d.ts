export interface EditShowAndReplaceRequest {
    /**
     * 导播台ID。
     * - 如果您通过[CreateCaster接口](~~69338~~)创建导播台，请查看CreateCaster接口调用返回的参数CasterId值。
     * - 如果您通过直播控制台创建导播台，请通过**直播控制台** > **导播台** > **云导播台**页面查看。
     * > 直播控制台云导播台页面导播台列表中的导播台名称即导播台ID。
     * @example `53200b81-b761-4c10-842a-a0726d97****`
     */
    "CasterId": string;
    /**
     * 需要剪辑的节目ID。
     * >通过查看[AddShowIntoShowLis](~~370861~~)t接口的返回参数获取ShowId值。
     * @example `42200b81-b761-4c10-842a-a0726d97****`
     */
    "ShowId": string;
    /**
     * 用户信息。
     * @example `900a2b2r8-13c2-****-88f2-75e4a07c1ed9`
     */
    "UserData"?: string;
    /**
     * 存储信息。描述：
     * - **StorageLocation**：用户点播存储地址。
     * - **FileName**：用户自定义文件名。
     * >剪辑存储地址必须是用户同一账户下的点播存储地址，获取点播存储地址请参见[存储管理](~~86097~~)。
     * @example `{ "StorageLocation":"***bucket***", "FileName":"EditFile****.mp4" }`
     */
    "StorageInfo"?: string;
    /**
     * 剪辑开始时间，单位：秒。
     * >- 剪辑时间取值范围为0到节目总时长。- 默认从点播文件开头开始剪辑，取值：0.0。- 如果您想要剪辑一个点播文件，从第2秒到第5秒，那么StartTime取值为2.0，EndTime取值为5.0。
     * @example `2.0`
     */
    "StartTime"?: number;
    /**
     * 剪辑结束时间，单位：秒。
     * >- 剪辑时间取值范围为0到节目总时长。- 默认取值为点播文件结束时长，取值不可超出节目的总时长。- 如果您想要剪辑一个点播文件，从第2秒到第5秒，那么StartTime取值为2.0，EndTime取值为5.0。
     * @example `5.0`
     */
    "EndTime"?: number;
}

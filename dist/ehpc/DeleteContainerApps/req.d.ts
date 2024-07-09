export interface DeleteContainerAppsRequest {
    /**
     * 容器信息。
     */
    "ContainerApp": {
        /**
         * 第N个要删除的容器应用ID。N的取值范围：1~100
         * @example `ehpc-container-ABDUGSkjs****`
         */
        Id: string;
    }[];
}

export interface ModifyContainerAppAttributesRequest {
    /**
     * 容器ID。
     * 您可以通过调用[ListContainerApps](~~87333~~)获取容器应用ID。
     * @example `ehpc-container-ABDUGSkjs****`
     */
    "ContainerId": string;
    /**
     * 修改后的容器应用描述。
     * @example `ExampleDescription`
     */
    "Description"?: string;
}

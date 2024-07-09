export interface DuplicateScriptRequest {
    /**
     * 实例id
     * @example `361c8a53-0e29-42f3-8aa7-c7752d010399`
     */
    "InstanceId": string;
    /**
     * 源话术id
     * @example `6114e7e8-4140-48d9-b46d-65ea29f13fe8`
     */
    "SourceScriptId": string;
    /**
     * 新话术名字
     * @example `复制的催收话术`
     */
    "Name": string;
}

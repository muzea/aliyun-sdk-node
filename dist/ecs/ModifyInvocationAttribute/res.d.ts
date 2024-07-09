export interface ModifyInvocationAttributeResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****`
     */
    RequestId: string;
    /**
     * 命令ID。
     *    - 只有`CommandContent`发生变更，才新增一条命令，返回新增的`CommandId`。
     *    - 当`CommandContent`未变更时，不会新增命令，将返回当前正在执行命令的`CommandId`。
     *    - 若调用[InvokeCommand](~~64841~~)，或调用[RunCommand](~~141751~~)时选择了`KeepCommand`为`true`，将会保留新增的命令；否则执行完成或手动停止任务时，将删除任务所有关联的命令。
     * @example `c-hz01272yr52****`
     */
    CommandId: string;
}

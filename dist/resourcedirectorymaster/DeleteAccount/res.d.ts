export interface DeleteAccountResponse {
    /**
     * 请求ID。
     * @example `009429F8-C1C0-5872-B674-A6C2333B9647`
     */
    RequestId: string;
    /**
     * 删除类型。取值：
     * - 0：直接删除。如果成员最近30天内不存在后付费资源，则系统会直接删除该成员。
     * - 1：静默期删除。如果成员最近30天内存在后付费资源，则会进入静默期。等待静默期结束后，系统才会开始删除该成员。关于静默期的更多信息，请参见[什么是成员删除的静默期](~~446079~~)。
     * @example `0`
     */
    DeletionType: string;
}

export interface DeleteConnectionRequest {
    /**
     * 对象名称
     * @example `demo-name`
     */
    "name"?: string;
    /**
     * 是否强制删除。若存在仓库绑定实体（Repository）关联了该身份绑定（Connection），则无法直接删除；您能够通过强制删除的方式删除该身份绑定
     * ><notice>删除身份绑定（Connection）时，不会级联删除关联的仓库绑定（Repository）></notice>
     * @example `true`
     */
    "force"?: boolean;
}

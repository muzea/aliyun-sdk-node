export interface CreateUserResponse {
    /**
     * 域id
     * @example `bj1`
     */
    domain_id: string;
    /**
     * 用户id
     * @example `dingding_abc001`
     */
    user_id: string;
    /**
     * 头像地址
     * @example `http://aa.com/1.jpg`
     */
    avatar: string;
    /**
     * 创建时间，格林威治时间1970年01月01日00时00分00秒起至现在的毫秒数
     * @example `1639762579768`
     */
    created_at: number;
    /**
     * 修改时间，格林威治时间1970年01月01日00时00分00秒起至现在的毫秒数
     * @example `1639762579768`
     */
    updated_at: number;
    /**
     * 昵称
     * @example `001`
     */
    nick_name: string;
    /**
     * 用户名
     * @example `pds`
     */
    user_name: string;
    /**
     * 电话
     * @example `13900001111`
     */
    phone: string;
    /**
     * 邮箱地址
     * @example `a@a.com`
     */
    email: string;
    /**
     * 角色
     * - superadmin（超级管理员）
     * - admin（管理员）
     * - user（普通用户）
     * @example `admin`
     */
    role: string;
    /**
     * 状态
     * - disabled（禁止）
     * - enabled（使能）
     * @example `enabled`
     */
    status: string;
    /**
     * 描述
     * @example `vipuser`
     */
    description: string;
    /**
     * 缺省空间id
     * @example `1`
     */
    default_drive_id: string;
    /**
     * 用户自定义数据
     */
    user_data: any;
    /**
     * 创建者
     * @example `user1`
     */
    creator: string;
}

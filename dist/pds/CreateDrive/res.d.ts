export interface CreateDriveResponse {
    /**
     * 域id
     * @example `bj1`
     */
    domain_id: string;
    /**
     * 空间id
     * @example `1`
     */
    drive_id: string;
    drive_name: string;
    description: string;
    owner: string;
    owner_type: string;
    drive_type: string;
    used_size: number;
    total_size: number;
    creator: string;
    created_at: string;
    status: string;
}

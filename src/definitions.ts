import type { PermissionState } from '@capacitor/core';

export interface CapacitorMapboxNavigationPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  show(options: MapboxNavOptions): Promise<MapboxResult>;
  history(): Promise<any>;
  requestPermissions(): Promise<PermissionStatus>;
  checkPermissions(): Promise<PermissionStatus>;
}

export interface PermissionStatus {
  location: PermissionState;
}

export interface MapboxResult {
  status: 'success' | 'failure';
  type: 'on_failure' | 'on_cancelled' | 'on_stop' | 'on_progress_update' | 'on_arrive';
  data: string;
}

export interface MapboxNavOptions {
  routes: LocationOption[];
  mapType?: string;
}

export interface LocationOption {
  latitude: number;
  longitude: number;
}

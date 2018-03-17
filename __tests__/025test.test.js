/**
 * Created by Makeev Evgeny on 16.03.18.
 */
// import FileSystem from '../025-fileSystemSimulator-FileLib';
const FileSystem = require('../025-fileSystemSimulator-FileLib');

describe('FS', () => {
  let files;

  beforeEach(() => {
    files = new FileSystem();
    files.mkdirSync('/etc');
    files.mkdirSync('/opt');
    files.touchSync('/opt/file.txt');
    files.mkdirpSync('/etc/nginx/conf.d');
    files.touchSync('/etc/nginx/nginx.conf');
    files.mkdirpSync('/usr/admin/docs');
  });

  it('#mkdirpSync', () => {
    expect(files.statSync('/etc/nginx/conf.d').isDirectory()).toBe(true);
    expect(files.mkdirpSync('/etc/nginx/nginx.conf/wrong')).toBe(false);
  });

  it('#mkdirSync', () => {
    expect(files.mkdirSync('/etc/nginx/nginx.conf/wrong')).toBe(false);
    expect(files.mkdirSync('/opt/folder/inner')).toBe(false);

    expect(files.statSync('/opt').isDirectory()).toBe(true);
  });

  it('#readdirSync', () => {
    expect(files.readdirSync('/etc/nginx')).toEqual(['conf.d', 'nginx.conf']);
    expect(files.readdirSync('/')).toEqual(['etc', 'opt', 'usr']);
    expect(files.readdirSync('/etc/nginx/undefined')).toBe(false);
    expect(files.readdirSync('/etc/nginx/nginx.conf')).toBe(false);
  });

  it('#rmdirSync', () => {
    files.rmdirSync('/etc/nginx/conf.d');
    expect(files.readdirSync('/etc/nginx')).toEqual(['nginx.conf']);

    expect(files.rmdirSync('/etc/unknown')).toBe(false);
    expect(files.rmdirSync('/etc/nginx')).toBe(false);

    expect(files.rmdirSync('/etc/nginx/nginx.conf')).toBe(false);

    files.rmdirSync('/usr/admin/docs');
    expect(files.readdirSync('/usr/admin/docs')).toBe(false);
  });

  it('#statSync', () => {
    expect(files.statSync('/etc/nginx').isDirectory()).toBe(true);
    expect(files.statSync('/etc/nginx').isFile()).toBe(false);

    expect(files.statSync('/etc/nginx/nginx.conf').isDirectory()).toBe(false);
    expect(files.statSync('/etc/nginx/nginx.conf').isFile()).toBe(true);

    expect(files.statSync('/etc/unknown')).toBe(null);
  });

  it('#touchSync', () => {
    expect(files.touchSync('/etc/nginx/nginx.conf/wrong')).toBe(false);
    expect(files.touchSync('/opt/folder/inner')).toBe(false);

    expect(files.statSync('/opt/file.txt').isFile()).toBe(true);
  });
});

import configDefault from '../../config.yaml';

// eslint-disable-next-line @typescript-eslint/ban-types
type EnvName = 'production' | 'staging' | 'dev' | 'preproduction' | 'local';
const config = configDefault as {
  [key: string | EnvName]: string | { [key: string]: unknown };
};

export function getEnvVariables(): EnvName {
  const currentUrl = window.location.href;
  let env: EnvName = 'production';

  if ((currentUrl.includes('localhost') || currentUrl.includes('develop') || currentUrl.includes('ngrok.io')) && !currentUrl.includes('staging')) {
    if (currentUrl.includes('localhost')) {
      env = 'local';
    } else {
      env = 'dev';
    }
  } else if (currentUrl.includes('staging')) {
    env = 'staging';
  } else {
    env = 'production';
  }

  if (currentUrl.includes('preproduction')) {
    env = 'preproduction';
  }
  return env;
}

export function getConfig(doc = config) {
  let env = getEnvVariables();
  const realEnvName = env;

  if (env === 'local') {
    env = 'dev';
  } else if (env === 'preproduction') {
    env = 'production';
  }

  const conf = doc[env] as { [key: string]: unknown | string };
  conf.realEnvName = realEnvName;

  for (const key in doc) {
    if (!(typeof doc[key] === 'object')) {
      conf[key] = doc[key];
    }
  }
  return conf;
}

export default getConfig();

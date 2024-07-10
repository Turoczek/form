# Formularz Rejestracyjny

Formularz rejestracyjny z wbudowaną funkcjonalnością sprawdzania dostępności treningów w wybrane dni.

## Wstęp
Projekt ma na celu stworzenie formularza rejestracyjnego, który sprawdza dostępność dni treningowych na podstawie listy świąt w Polsce. Formularz jest responsywny i wszystkie pola są wymagane do wypełnienia.

## Live
https://turoczek.github.io/form/

## Wymagania
- Node.js
- npm (Node Package Manager)

## Instalacja

1. Sklonuj repozytorium:
    ```
    git clone https://github.com/Turoczek/form.git
    cd form-project
    ```

2. Zainstaluj zależności:
    ```
    npm install
    ```

## Konfiguracja

1. Utwórz plik `.env` w katalogu głównym projektu i dodaj poniższe zmienne środowiskowe:
    ```env
    REACT_APP_API_KEY=
    REACT_APP_API_BASEURL=https://api.api-ninjas.com/v1
    ```

## Uruchomienie

1. Uruchom aplikację:
    ```
    npm start
    ```

2. Otwórz przeglądarkę i przejdź do `http://localhost:3000`

### API Świąt
- Formularz korzysta z API zwracającego listę świąt: [API Ninjas - Holidays](https://api-ninjas.com/api/holidays)
- Parametry zapytania: `country=PL`, `year=2023`
- Dni, które mają `type = "NATIONAL_HOLIDAY"` oraz niedziele są zablokowane jako dni treningowe.
- Po wybraniu daty, która ma `type = "OBSERVANCE"`, wyświetlana jest informacja o święcie.

### Wysyłanie Danych
- Po kliknięciu przycisku "Send Application", dane z formularza są wysyłane na endpoint `http://letsworkout.pl/submit` metodą POST jako form data.

## Technologie

- React
- Redux Toolkit
- TypeScript
- TailwindCSS